# `dataDatabricksGroup` Submodule <a name="`dataDatabricksGroup` Submodule" id="@cdktn/provider-databricks.dataDatabricksGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksGroup <a name="DataDatabricksGroup" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group databricks_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGroup(Construct Scope, string Id, DataDatabricksGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig">DataDatabricksGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig">DataDatabricksGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAclPrincipalId">ResetAclPrincipalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowClusterCreate">ResetAllowClusterCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowInstancePoolCreate">ResetAllowInstancePoolCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetApi">ResetApi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetChildGroups">ResetChildGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetDatabricksSqlAccess">ResetDatabricksSqlAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetGroups">ResetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetInstanceProfiles">ResetInstanceProfiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetMembers">ResetMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetRecursive">ResetRecursive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetServicePrincipals">ResetServicePrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetUsers">ResetUsers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceAccess">ResetWorkspaceAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceConsume">ResetWorkspaceConsume</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksGroupProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a>

---

##### `ResetAclPrincipalId` <a name="ResetAclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAclPrincipalId"></a>

```csharp
private void ResetAclPrincipalId()
```

##### `ResetAllowClusterCreate` <a name="ResetAllowClusterCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowClusterCreate"></a>

```csharp
private void ResetAllowClusterCreate()
```

##### `ResetAllowInstancePoolCreate` <a name="ResetAllowInstancePoolCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetAllowInstancePoolCreate"></a>

```csharp
private void ResetAllowInstancePoolCreate()
```

##### `ResetApi` <a name="ResetApi" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetApi"></a>

```csharp
private void ResetApi()
```

##### `ResetChildGroups` <a name="ResetChildGroups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetChildGroups"></a>

```csharp
private void ResetChildGroups()
```

##### `ResetDatabricksSqlAccess` <a name="ResetDatabricksSqlAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetDatabricksSqlAccess"></a>

```csharp
private void ResetDatabricksSqlAccess()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetGroups` <a name="ResetGroups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetGroups"></a>

```csharp
private void ResetGroups()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceProfiles` <a name="ResetInstanceProfiles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetInstanceProfiles"></a>

```csharp
private void ResetInstanceProfiles()
```

##### `ResetMembers` <a name="ResetMembers" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetMembers"></a>

```csharp
private void ResetMembers()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

##### `ResetRecursive` <a name="ResetRecursive" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetRecursive"></a>

```csharp
private void ResetRecursive()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetRoles"></a>

```csharp
private void ResetRoles()
```

##### `ResetServicePrincipals` <a name="ResetServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetServicePrincipals"></a>

```csharp
private void ResetServicePrincipals()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetUsers"></a>

```csharp
private void ResetUsers()
```

##### `ResetWorkspaceAccess` <a name="ResetWorkspaceAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceAccess"></a>

```csharp
private void ResetWorkspaceAccess()
```

##### `ResetWorkspaceConsume` <a name="ResetWorkspaceConsume" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.resetWorkspaceConsume"></a>

```csharp
private void ResetWorkspaceConsume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksGroup.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference">DataDatabricksGroupProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalIdInput">AclPrincipalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreateInput">AllowClusterCreateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreateInput">AllowInstancePoolCreateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.apiInput">ApiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroupsInput">ChildGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccessInput">DatabricksSqlAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groupsInput">GroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfilesInput">InstanceProfilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursiveInput">RecursiveInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.rolesInput">RolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipalsInput">ServicePrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.usersInput">UsersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccessInput">WorkspaceAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceConsumeInput">WorkspaceConsumeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalId">AclPrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreate">AllowClusterCreate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreate">AllowInstancePoolCreate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroups">ChildGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccess">DatabricksSqlAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfiles">InstanceProfiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursive">Recursive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.roles">Roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipals">ServicePrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.users">Users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccess">WorkspaceAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceConsume">WorkspaceConsume</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.providerConfig"></a>

```csharp
public DataDatabricksGroupProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference">DataDatabricksGroupProviderConfigOutputReference</a>

---

##### `AclPrincipalIdInput`<sup>Optional</sup> <a name="AclPrincipalIdInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalIdInput"></a>

```csharp
public string AclPrincipalIdInput { get; }
```

- *Type:* string

---

##### `AllowClusterCreateInput`<sup>Optional</sup> <a name="AllowClusterCreateInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreateInput"></a>

```csharp
public bool|IResolvable AllowClusterCreateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowInstancePoolCreateInput`<sup>Optional</sup> <a name="AllowInstancePoolCreateInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreateInput"></a>

```csharp
public bool|IResolvable AllowInstancePoolCreateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.apiInput"></a>

```csharp
public string ApiInput { get; }
```

- *Type:* string

---

##### `ChildGroupsInput`<sup>Optional</sup> <a name="ChildGroupsInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroupsInput"></a>

```csharp
public string[] ChildGroupsInput { get; }
```

- *Type:* string[]

---

##### `DatabricksSqlAccessInput`<sup>Optional</sup> <a name="DatabricksSqlAccessInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccessInput"></a>

```csharp
public bool|IResolvable DatabricksSqlAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `GroupsInput`<sup>Optional</sup> <a name="GroupsInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groupsInput"></a>

```csharp
public string[] GroupsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceProfilesInput`<sup>Optional</sup> <a name="InstanceProfilesInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfilesInput"></a>

```csharp
public string[] InstanceProfilesInput { get; }
```

- *Type:* string[]

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.providerConfigInput"></a>

```csharp
public DataDatabricksGroupProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a>

---

##### `RecursiveInput`<sup>Optional</sup> <a name="RecursiveInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursiveInput"></a>

```csharp
public bool|IResolvable RecursiveInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.rolesInput"></a>

```csharp
public string[] RolesInput { get; }
```

- *Type:* string[]

---

##### `ServicePrincipalsInput`<sup>Optional</sup> <a name="ServicePrincipalsInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipalsInput"></a>

```csharp
public string[] ServicePrincipalsInput { get; }
```

- *Type:* string[]

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.usersInput"></a>

```csharp
public string[] UsersInput { get; }
```

- *Type:* string[]

---

##### `WorkspaceAccessInput`<sup>Optional</sup> <a name="WorkspaceAccessInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccessInput"></a>

```csharp
public bool|IResolvable WorkspaceAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WorkspaceConsumeInput`<sup>Optional</sup> <a name="WorkspaceConsumeInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceConsumeInput"></a>

```csharp
public bool|IResolvable WorkspaceConsumeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AclPrincipalId`<sup>Required</sup> <a name="AclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.aclPrincipalId"></a>

```csharp
public string AclPrincipalId { get; }
```

- *Type:* string

---

##### `AllowClusterCreate`<sup>Required</sup> <a name="AllowClusterCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowClusterCreate"></a>

```csharp
public bool|IResolvable AllowClusterCreate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowInstancePoolCreate`<sup>Required</sup> <a name="AllowInstancePoolCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.allowInstancePoolCreate"></a>

```csharp
public bool|IResolvable AllowInstancePoolCreate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `ChildGroups`<sup>Required</sup> <a name="ChildGroups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.childGroups"></a>

```csharp
public string[] ChildGroups { get; }
```

- *Type:* string[]

---

##### `DatabricksSqlAccess`<sup>Required</sup> <a name="DatabricksSqlAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.databricksSqlAccess"></a>

```csharp
public bool|IResolvable DatabricksSqlAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceProfiles`<sup>Required</sup> <a name="InstanceProfiles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.instanceProfiles"></a>

```csharp
public string[] InstanceProfiles { get; }
```

- *Type:* string[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Recursive`<sup>Required</sup> <a name="Recursive" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.recursive"></a>

```csharp
public bool|IResolvable Recursive { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.roles"></a>

```csharp
public string[] Roles { get; }
```

- *Type:* string[]

---

##### `ServicePrincipals`<sup>Required</sup> <a name="ServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.servicePrincipals"></a>

```csharp
public string[] ServicePrincipals { get; }
```

- *Type:* string[]

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.users"></a>

```csharp
public string[] Users { get; }
```

- *Type:* string[]

---

##### `WorkspaceAccess`<sup>Required</sup> <a name="WorkspaceAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceAccess"></a>

```csharp
public bool|IResolvable WorkspaceAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WorkspaceConsume`<sup>Required</sup> <a name="WorkspaceConsume" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.workspaceConsume"></a>

```csharp
public bool|IResolvable WorkspaceConsume { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksGroupConfig <a name="DataDatabricksGroupConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string AclPrincipalId = null,
    bool|IResolvable AllowClusterCreate = null,
    bool|IResolvable AllowInstancePoolCreate = null,
    string Api = null,
    string[] ChildGroups = null,
    bool|IResolvable DatabricksSqlAccess = null,
    string ExternalId = null,
    string[] Groups = null,
    string Id = null,
    string[] InstanceProfiles = null,
    string[] Members = null,
    DataDatabricksGroupProviderConfig ProviderConfig = null,
    bool|IResolvable Recursive = null,
    string[] Roles = null,
    string[] ServicePrincipals = null,
    string[] Users = null,
    bool|IResolvable WorkspaceAccess = null,
    bool|IResolvable WorkspaceConsume = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#display_name DataDatabricksGroup#display_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.aclPrincipalId">AclPrincipalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#acl_principal_id DataDatabricksGroup#acl_principal_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowClusterCreate">AllowClusterCreate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#allow_cluster_create DataDatabricksGroup#allow_cluster_create}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowInstancePoolCreate">AllowInstancePoolCreate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#allow_instance_pool_create DataDatabricksGroup#allow_instance_pool_create}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.api">Api</a></code> | <code>string</code> | Specifies whether to use account-level or workspace-level API. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.childGroups">ChildGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#child_groups DataDatabricksGroup#child_groups}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.databricksSqlAccess">DatabricksSqlAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#databricks_sql_access DataDatabricksGroup#databricks_sql_access}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.externalId">ExternalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#external_id DataDatabricksGroup#external_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.groups">Groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#groups DataDatabricksGroup#groups}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#id DataDatabricksGroup#id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.instanceProfiles">InstanceProfiles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#instance_profiles DataDatabricksGroup#instance_profiles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#members DataDatabricksGroup#members}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a></code> | provider_config block. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.recursive">Recursive</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#recursive DataDatabricksGroup#recursive}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.roles">Roles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#roles DataDatabricksGroup#roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.servicePrincipals">ServicePrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#service_principals DataDatabricksGroup#service_principals}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.users">Users</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#users DataDatabricksGroup#users}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceAccess">WorkspaceAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#workspace_access DataDatabricksGroup#workspace_access}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceConsume">WorkspaceConsume</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#workspace_consume DataDatabricksGroup#workspace_consume}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#display_name DataDatabricksGroup#display_name}.

---

##### `AclPrincipalId`<sup>Optional</sup> <a name="AclPrincipalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.aclPrincipalId"></a>

```csharp
public string AclPrincipalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#acl_principal_id DataDatabricksGroup#acl_principal_id}.

---

##### `AllowClusterCreate`<sup>Optional</sup> <a name="AllowClusterCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowClusterCreate"></a>

```csharp
public bool|IResolvable AllowClusterCreate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#allow_cluster_create DataDatabricksGroup#allow_cluster_create}.

---

##### `AllowInstancePoolCreate`<sup>Optional</sup> <a name="AllowInstancePoolCreate" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.allowInstancePoolCreate"></a>

```csharp
public bool|IResolvable AllowInstancePoolCreate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#allow_instance_pool_create DataDatabricksGroup#allow_instance_pool_create}.

---

##### `Api`<sup>Optional</sup> <a name="Api" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.api"></a>

```csharp
public string Api { get; set; }
```

- *Type:* string

Specifies whether to use account-level or workspace-level API.

Valid values are `account` and `workspace`. When not set, the API level is inferred from the provider host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#api DataDatabricksGroup#api}

---

##### `ChildGroups`<sup>Optional</sup> <a name="ChildGroups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.childGroups"></a>

```csharp
public string[] ChildGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#child_groups DataDatabricksGroup#child_groups}.

---

##### `DatabricksSqlAccess`<sup>Optional</sup> <a name="DatabricksSqlAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.databricksSqlAccess"></a>

```csharp
public bool|IResolvable DatabricksSqlAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#databricks_sql_access DataDatabricksGroup#databricks_sql_access}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#external_id DataDatabricksGroup#external_id}.

---

##### `Groups`<sup>Optional</sup> <a name="Groups" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.groups"></a>

```csharp
public string[] Groups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#groups DataDatabricksGroup#groups}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#id DataDatabricksGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceProfiles`<sup>Optional</sup> <a name="InstanceProfiles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.instanceProfiles"></a>

```csharp
public string[] InstanceProfiles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#instance_profiles DataDatabricksGroup#instance_profiles}.

---

##### `Members`<sup>Optional</sup> <a name="Members" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#members DataDatabricksGroup#members}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.providerConfig"></a>

```csharp
public DataDatabricksGroupProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#provider_config DataDatabricksGroup#provider_config}

---

##### `Recursive`<sup>Optional</sup> <a name="Recursive" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.recursive"></a>

```csharp
public bool|IResolvable Recursive { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#recursive DataDatabricksGroup#recursive}.

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.roles"></a>

```csharp
public string[] Roles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#roles DataDatabricksGroup#roles}.

---

##### `ServicePrincipals`<sup>Optional</sup> <a name="ServicePrincipals" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.servicePrincipals"></a>

```csharp
public string[] ServicePrincipals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#service_principals DataDatabricksGroup#service_principals}.

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.users"></a>

```csharp
public string[] Users { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#users DataDatabricksGroup#users}.

---

##### `WorkspaceAccess`<sup>Optional</sup> <a name="WorkspaceAccess" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceAccess"></a>

```csharp
public bool|IResolvable WorkspaceAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#workspace_access DataDatabricksGroup#workspace_access}.

---

##### `WorkspaceConsume`<sup>Optional</sup> <a name="WorkspaceConsume" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupConfig.property.workspaceConsume"></a>

```csharp
public bool|IResolvable WorkspaceConsume { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#workspace_consume DataDatabricksGroup#workspace_consume}.

---

### DataDatabricksGroupProviderConfig <a name="DataDatabricksGroupProviderConfig" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGroupProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#workspace_id DataDatabricksGroup#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/group#workspace_id DataDatabricksGroup#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksGroupProviderConfigOutputReference <a name="DataDatabricksGroupProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksGroupProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksGroupProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksGroup.DataDatabricksGroupProviderConfig">DataDatabricksGroupProviderConfig</a>

---



