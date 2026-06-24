# `dataDatabricksPostgresRole` Submodule <a name="`dataDatabricksPostgresRole` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresRole <a name="DataDatabricksPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role databricks_postgres_role}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresRole(Construct Scope, string Id, DataDatabricksPostgresRoleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig">DataDatabricksPostgresRoleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig">DataDatabricksPostgresRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksPostgresRoleProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresRole resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresRole.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresRole.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresRole.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresRole.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksPostgresRole resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresRole to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference">DataDatabricksPostgresRoleProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference">DataDatabricksPostgresRoleSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference">DataDatabricksPostgresRoleStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresRoleProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference">DataDatabricksPostgresRoleProviderConfigOutputReference</a>

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.spec"></a>

```csharp
public DataDatabricksPostgresRoleSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference">DataDatabricksPostgresRoleSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.status"></a>

```csharp
public DataDatabricksPostgresRoleStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference">DataDatabricksPostgresRoleStatusOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresRoleProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRole.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresRoleConfig <a name="DataDatabricksPostgresRoleConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresRoleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksPostgresRoleProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#name DataDatabricksPostgresRole#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#provider_config DataDatabricksPostgresRole#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#name DataDatabricksPostgresRole#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleConfig.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresRoleProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#provider_config DataDatabricksPostgresRole#provider_config}.

---

### DataDatabricksPostgresRoleProviderConfig <a name="DataDatabricksPostgresRoleProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresRoleProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#workspace_id DataDatabricksPostgresRole#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#workspace_id DataDatabricksPostgresRole#workspace_id}.

---

### DataDatabricksPostgresRoleSpec <a name="DataDatabricksPostgresRoleSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresRoleSpec {
    DataDatabricksPostgresRoleSpecAttributes Attributes = null,
    string AuthMethod = null,
    string IdentityType = null,
    string[] MembershipRoles = null,
    string PostgresRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.authMethod">AuthMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.identityType">IdentityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.membershipRoles">MembershipRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.postgresRole">PostgresRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.attributes"></a>

```csharp
public DataDatabricksPostgresRoleSpecAttributes Attributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}.

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}.

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.identityType"></a>

```csharp
public string IdentityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}.

---

##### `MembershipRoles`<sup>Optional</sup> <a name="MembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.membershipRoles"></a>

```csharp
public string[] MembershipRoles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}.

---

##### `PostgresRole`<sup>Optional</sup> <a name="PostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec.property.postgresRole"></a>

```csharp
public string PostgresRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}.

---

### DataDatabricksPostgresRoleSpecAttributes <a name="DataDatabricksPostgresRoleSpecAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresRoleSpecAttributes {
    bool|IResolvable Bypassrls = null,
    bool|IResolvable Createdb = null,
    bool|IResolvable Createrole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.bypassrls">Bypassrls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.createdb">Createdb</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.createrole">Createrole</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}. |

---

##### `Bypassrls`<sup>Optional</sup> <a name="Bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.bypassrls"></a>

```csharp
public bool|IResolvable Bypassrls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}.

---

##### `Createdb`<sup>Optional</sup> <a name="Createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.createdb"></a>

```csharp
public bool|IResolvable Createdb { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}.

---

##### `Createrole`<sup>Optional</sup> <a name="Createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes.property.createrole"></a>

```csharp
public bool|IResolvable Createrole { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}.

---

### DataDatabricksPostgresRoleStatus <a name="DataDatabricksPostgresRoleStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresRoleStatus {
    DataDatabricksPostgresRoleStatusAttributes Attributes = null,
    string AuthMethod = null,
    string IdentityType = null,
    string[] MembershipRoles = null,
    string PostgresRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.authMethod">AuthMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.identityType">IdentityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.membershipRoles">MembershipRoles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.postgresRole">PostgresRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.attributes"></a>

```csharp
public DataDatabricksPostgresRoleStatusAttributes Attributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#attributes DataDatabricksPostgresRole#attributes}.

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#auth_method DataDatabricksPostgresRole#auth_method}.

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.identityType"></a>

```csharp
public string IdentityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#identity_type DataDatabricksPostgresRole#identity_type}.

---

##### `MembershipRoles`<sup>Optional</sup> <a name="MembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.membershipRoles"></a>

```csharp
public string[] MembershipRoles { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#membership_roles DataDatabricksPostgresRole#membership_roles}.

---

##### `PostgresRole`<sup>Optional</sup> <a name="PostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus.property.postgresRole"></a>

```csharp
public string PostgresRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#postgres_role DataDatabricksPostgresRole#postgres_role}.

---

### DataDatabricksPostgresRoleStatusAttributes <a name="DataDatabricksPostgresRoleStatusAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresRoleStatusAttributes {
    bool|IResolvable Bypassrls = null,
    bool|IResolvable Createdb = null,
    bool|IResolvable Createrole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.bypassrls">Bypassrls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.createdb">Createdb</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.createrole">Createrole</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}. |

---

##### `Bypassrls`<sup>Optional</sup> <a name="Bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.bypassrls"></a>

```csharp
public bool|IResolvable Bypassrls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#bypassrls DataDatabricksPostgresRole#bypassrls}.

---

##### `Createdb`<sup>Optional</sup> <a name="Createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.createdb"></a>

```csharp
public bool|IResolvable Createdb { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createdb DataDatabricksPostgresRole#createdb}.

---

##### `Createrole`<sup>Optional</sup> <a name="Createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes.property.createrole"></a>

```csharp
public bool|IResolvable Createrole { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.119.0/docs/data-sources/postgres_role#createrole DataDatabricksPostgresRole#createrole}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresRoleProviderConfigOutputReference <a name="DataDatabricksPostgresRoleProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresRoleProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresRoleProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleProviderConfig">DataDatabricksPostgresRoleProviderConfig</a>

---


### DataDatabricksPostgresRoleSpecAttributesOutputReference <a name="DataDatabricksPostgresRoleSpecAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresRoleSpecAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetBypassrls">ResetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetCreatedb">ResetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetCreaterole">ResetCreaterole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBypassrls` <a name="ResetBypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetBypassrls"></a>

```csharp
private void ResetBypassrls()
```

##### `ResetCreatedb` <a name="ResetCreatedb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetCreatedb"></a>

```csharp
private void ResetCreatedb()
```

##### `ResetCreaterole` <a name="ResetCreaterole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.resetCreaterole"></a>

```csharp
private void ResetCreaterole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.bypassrlsInput">BypassrlsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createdbInput">CreatedbInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createroleInput">CreateroleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.bypassrls">Bypassrls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createdb">Createdb</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createrole">Createrole</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BypassrlsInput`<sup>Optional</sup> <a name="BypassrlsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.bypassrlsInput"></a>

```csharp
public bool|IResolvable BypassrlsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreatedbInput`<sup>Optional</sup> <a name="CreatedbInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createdbInput"></a>

```csharp
public bool|IResolvable CreatedbInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreateroleInput`<sup>Optional</sup> <a name="CreateroleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createroleInput"></a>

```csharp
public bool|IResolvable CreateroleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Bypassrls`<sup>Required</sup> <a name="Bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.bypassrls"></a>

```csharp
public bool|IResolvable Bypassrls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Createdb`<sup>Required</sup> <a name="Createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createdb"></a>

```csharp
public bool|IResolvable Createdb { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Createrole`<sup>Required</sup> <a name="Createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.createrole"></a>

```csharp
public bool|IResolvable Createrole { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresRoleSpecAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a>

---


### DataDatabricksPostgresRoleSpecOutputReference <a name="DataDatabricksPostgresRoleSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresRoleSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetMembershipRoles">ResetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetPostgresRole">ResetPostgresRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.putAttributes"></a>

```csharp
private void PutAttributes(DataDatabricksPostgresRoleSpecAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetIdentityType"></a>

```csharp
private void ResetIdentityType()
```

##### `ResetMembershipRoles` <a name="ResetMembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetMembershipRoles"></a>

```csharp
private void ResetMembershipRoles()
```

##### `ResetPostgresRole` <a name="ResetPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.resetPostgresRole"></a>

```csharp
private void ResetPostgresRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference">DataDatabricksPostgresRoleSpecAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.attributesInput">AttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.membershipRolesInput">MembershipRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.postgresRoleInput">PostgresRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.identityType">IdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.membershipRoles">MembershipRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.postgresRole">PostgresRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec">DataDatabricksPostgresRoleSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.attributes"></a>

```csharp
public DataDatabricksPostgresRoleSpecAttributesOutputReference Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributesOutputReference">DataDatabricksPostgresRoleSpecAttributesOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.attributesInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresRoleSpecAttributes AttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecAttributes">DataDatabricksPostgresRoleSpecAttributes</a>

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.identityTypeInput"></a>

```csharp
public string IdentityTypeInput { get; }
```

- *Type:* string

---

##### `MembershipRolesInput`<sup>Optional</sup> <a name="MembershipRolesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.membershipRolesInput"></a>

```csharp
public string[] MembershipRolesInput { get; }
```

- *Type:* string[]

---

##### `PostgresRoleInput`<sup>Optional</sup> <a name="PostgresRoleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.postgresRoleInput"></a>

```csharp
public string PostgresRoleInput { get; }
```

- *Type:* string

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.identityType"></a>

```csharp
public string IdentityType { get; }
```

- *Type:* string

---

##### `MembershipRoles`<sup>Required</sup> <a name="MembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.membershipRoles"></a>

```csharp
public string[] MembershipRoles { get; }
```

- *Type:* string[]

---

##### `PostgresRole`<sup>Required</sup> <a name="PostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.postgresRole"></a>

```csharp
public string PostgresRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresRoleSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleSpec">DataDatabricksPostgresRoleSpec</a>

---


### DataDatabricksPostgresRoleStatusAttributesOutputReference <a name="DataDatabricksPostgresRoleStatusAttributesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresRoleStatusAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetBypassrls">ResetBypassrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetCreatedb">ResetCreatedb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetCreaterole">ResetCreaterole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBypassrls` <a name="ResetBypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetBypassrls"></a>

```csharp
private void ResetBypassrls()
```

##### `ResetCreatedb` <a name="ResetCreatedb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetCreatedb"></a>

```csharp
private void ResetCreatedb()
```

##### `ResetCreaterole` <a name="ResetCreaterole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.resetCreaterole"></a>

```csharp
private void ResetCreaterole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.bypassrlsInput">BypassrlsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createdbInput">CreatedbInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createroleInput">CreateroleInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.bypassrls">Bypassrls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createdb">Createdb</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createrole">Createrole</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BypassrlsInput`<sup>Optional</sup> <a name="BypassrlsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.bypassrlsInput"></a>

```csharp
public bool|IResolvable BypassrlsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreatedbInput`<sup>Optional</sup> <a name="CreatedbInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createdbInput"></a>

```csharp
public bool|IResolvable CreatedbInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CreateroleInput`<sup>Optional</sup> <a name="CreateroleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createroleInput"></a>

```csharp
public bool|IResolvable CreateroleInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Bypassrls`<sup>Required</sup> <a name="Bypassrls" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.bypassrls"></a>

```csharp
public bool|IResolvable Bypassrls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Createdb`<sup>Required</sup> <a name="Createdb" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createdb"></a>

```csharp
public bool|IResolvable Createdb { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Createrole`<sup>Required</sup> <a name="Createrole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.createrole"></a>

```csharp
public bool|IResolvable Createrole { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresRoleStatusAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a>

---


### DataDatabricksPostgresRoleStatusOutputReference <a name="DataDatabricksPostgresRoleStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresRoleStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetMembershipRoles">ResetMembershipRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetPostgresRole">ResetPostgresRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.putAttributes"></a>

```csharp
private void PutAttributes(DataDatabricksPostgresRoleStatusAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetIdentityType"></a>

```csharp
private void ResetIdentityType()
```

##### `ResetMembershipRoles` <a name="ResetMembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetMembershipRoles"></a>

```csharp
private void ResetMembershipRoles()
```

##### `ResetPostgresRole` <a name="ResetPostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.resetPostgresRole"></a>

```csharp
private void ResetPostgresRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference">DataDatabricksPostgresRoleStatusAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.roleId">RoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.attributesInput">AttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.membershipRolesInput">MembershipRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.postgresRoleInput">PostgresRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.identityType">IdentityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.membershipRoles">MembershipRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.postgresRole">PostgresRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus">DataDatabricksPostgresRoleStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.attributes"></a>

```csharp
public DataDatabricksPostgresRoleStatusAttributesOutputReference Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributesOutputReference">DataDatabricksPostgresRoleStatusAttributesOutputReference</a>

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.roleId"></a>

```csharp
public string RoleId { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.attributesInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresRoleStatusAttributes AttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusAttributes">DataDatabricksPostgresRoleStatusAttributes</a>

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.identityTypeInput"></a>

```csharp
public string IdentityTypeInput { get; }
```

- *Type:* string

---

##### `MembershipRolesInput`<sup>Optional</sup> <a name="MembershipRolesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.membershipRolesInput"></a>

```csharp
public string[] MembershipRolesInput { get; }
```

- *Type:* string[]

---

##### `PostgresRoleInput`<sup>Optional</sup> <a name="PostgresRoleInput" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.postgresRoleInput"></a>

```csharp
public string PostgresRoleInput { get; }
```

- *Type:* string

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.identityType"></a>

```csharp
public string IdentityType { get; }
```

- *Type:* string

---

##### `MembershipRoles`<sup>Required</sup> <a name="MembershipRoles" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.membershipRoles"></a>

```csharp
public string[] MembershipRoles { get; }
```

- *Type:* string[]

---

##### `PostgresRole`<sup>Required</sup> <a name="PostgresRole" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.postgresRole"></a>

```csharp
public string PostgresRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresRoleStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresRole.DataDatabricksPostgresRoleStatus">DataDatabricksPostgresRoleStatus</a>

---



