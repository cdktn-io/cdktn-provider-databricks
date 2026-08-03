# `dataDatabricksWorkspaceEntityTagAssignment` Submodule <a name="`dataDatabricksWorkspaceEntityTagAssignment` Submodule" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksWorkspaceEntityTagAssignment <a name="DataDatabricksWorkspaceEntityTagAssignment" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/workspace_entity_tag_assignment databricks_workspace_entity_tag_assignment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceEntityTagAssignment(Construct Scope, string Id, DataDatabricksWorkspaceEntityTagAssignmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig">DataDatabricksWorkspaceEntityTagAssignmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig">DataDatabricksWorkspaceEntityTagAssignmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksWorkspaceEntityTagAssignmentProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksWorkspaceEntityTagAssignment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWorkspaceEntityTagAssignment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWorkspaceEntityTagAssignment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWorkspaceEntityTagAssignment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksWorkspaceEntityTagAssignment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksWorkspaceEntityTagAssignment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksWorkspaceEntityTagAssignment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksWorkspaceEntityTagAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/workspace_entity_tag_assignment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksWorkspaceEntityTagAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagValue">TagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityIdInput">EntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityTypeInput">EntityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKeyInput">TagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKey">TagKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.providerConfig"></a>

```csharp
public DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference">DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference</a>

---

##### `TagValue`<sup>Required</sup> <a name="TagValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagValue"></a>

```csharp
public string TagValue { get; }
```

- *Type:* string

---

##### `EntityIdInput`<sup>Optional</sup> <a name="EntityIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityIdInput"></a>

```csharp
public string EntityIdInput { get; }
```

- *Type:* string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityTypeInput"></a>

```csharp
public string EntityTypeInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksWorkspaceEntityTagAssignmentProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKeyInput"></a>

```csharp
public string TagKeyInput { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tagKey"></a>

```csharp
public string TagKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksWorkspaceEntityTagAssignmentConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceEntityTagAssignmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string EntityId,
    string EntityType,
    string TagKey,
    DataDatabricksWorkspaceEntityTagAssignmentProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityId">EntityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/workspace_entity_tag_assignment#entity_id DataDatabricksWorkspaceEntityTagAssignment#entity_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityType">EntityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/workspace_entity_tag_assignment#entity_type DataDatabricksWorkspaceEntityTagAssignment#entity_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.tagKey">TagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/workspace_entity_tag_assignment#tag_key DataDatabricksWorkspaceEntityTagAssignment#tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/workspace_entity_tag_assignment#provider_config DataDatabricksWorkspaceEntityTagAssignment#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityId"></a>

```csharp
public string EntityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/workspace_entity_tag_assignment#entity_id DataDatabricksWorkspaceEntityTagAssignment#entity_id}.

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.entityType"></a>

```csharp
public string EntityType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/workspace_entity_tag_assignment#entity_type DataDatabricksWorkspaceEntityTagAssignment#entity_type}.

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.tagKey"></a>

```csharp
public string TagKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/workspace_entity_tag_assignment#tag_key DataDatabricksWorkspaceEntityTagAssignment#tag_key}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentConfig.property.providerConfig"></a>

```csharp
public DataDatabricksWorkspaceEntityTagAssignmentProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/workspace_entity_tag_assignment#provider_config DataDatabricksWorkspaceEntityTagAssignment#provider_config}.

---

### DataDatabricksWorkspaceEntityTagAssignmentProviderConfig <a name="DataDatabricksWorkspaceEntityTagAssignmentProviderConfig" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceEntityTagAssignmentProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/workspace_entity_tag_assignment#workspace_id DataDatabricksWorkspaceEntityTagAssignment#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/data-sources/workspace_entity_tag_assignment#workspace_id DataDatabricksWorkspaceEntityTagAssignment#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference <a name="DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksWorkspaceEntityTagAssignmentProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksWorkspaceEntityTagAssignment.DataDatabricksWorkspaceEntityTagAssignmentProviderConfig">DataDatabricksWorkspaceEntityTagAssignmentProviderConfig</a>

---



