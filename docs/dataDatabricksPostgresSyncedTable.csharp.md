# `dataDatabricksPostgresSyncedTable` Submodule <a name="`dataDatabricksPostgresSyncedTable` Submodule" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPostgresSyncedTable <a name="DataDatabricksPostgresSyncedTable" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table databricks_postgres_synced_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTable(Construct Scope, string Id, DataDatabricksPostgresSyncedTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig">DataDatabricksPostgresSyncedTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig">DataDatabricksPostgresSyncedTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksPostgresSyncedTableProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksPostgresSyncedTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresSyncedTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresSyncedTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresSyncedTable.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksPostgresSyncedTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksPostgresSyncedTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPostgresSyncedTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPostgresSyncedTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksPostgresSyncedTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference">DataDatabricksPostgresSyncedTableProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference">DataDatabricksPostgresSyncedTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference">DataDatabricksPostgresSyncedTableStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.syncedTableId">SyncedTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresSyncedTableProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference">DataDatabricksPostgresSyncedTableProviderConfigOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.spec"></a>

```csharp
public DataDatabricksPostgresSyncedTableSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference">DataDatabricksPostgresSyncedTableSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.status"></a>

```csharp
public DataDatabricksPostgresSyncedTableStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference">DataDatabricksPostgresSyncedTableStatusOutputReference</a>

---

##### `SyncedTableId`<sup>Required</sup> <a name="SyncedTableId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.syncedTableId"></a>

```csharp
public string SyncedTableId { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresSyncedTableProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPostgresSyncedTableConfig <a name="DataDatabricksPostgresSyncedTableConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksPostgresSyncedTableProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#name DataDatabricksPostgresSyncedTable#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#provider_config DataDatabricksPostgresSyncedTable#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#name DataDatabricksPostgresSyncedTable#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableConfig.property.providerConfig"></a>

```csharp
public DataDatabricksPostgresSyncedTableProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#provider_config DataDatabricksPostgresSyncedTable#provider_config}.

---

### DataDatabricksPostgresSyncedTableProviderConfig <a name="DataDatabricksPostgresSyncedTableProviderConfig" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#workspace_id DataDatabricksPostgresSyncedTable#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#workspace_id DataDatabricksPostgresSyncedTable#workspace_id}.

---

### DataDatabricksPostgresSyncedTableSpec <a name="DataDatabricksPostgresSyncedTableSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableSpec {
    bool|IResolvable AcceleratedSync = null,
    string Branch = null,
    bool|IResolvable CreateDatabaseObjectsIfMissing = null,
    string ExistingPipelineId = null,
    IResolvable|DataDatabricksPostgresSyncedTableSpecExtraColumns[] ExtraColumns = null,
    DataDatabricksPostgresSyncedTableSpecNewPipelineSpec NewPipelineSpec = null,
    string PostgresDatabase = null,
    string[] PrimaryKeyColumns = null,
    string SchedulingPolicy = null,
    string SourceTableFullName = null,
    string TimeseriesKey = null,
    IResolvable|DataDatabricksPostgresSyncedTableSpecTypeOverrides[] TypeOverrides = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.acceleratedSync">AcceleratedSync</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#accelerated_sync DataDatabricksPostgresSyncedTable#accelerated_sync}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.branch">Branch</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#branch DataDatabricksPostgresSyncedTable#branch}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#create_database_objects_if_missing DataDatabricksPostgresSyncedTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.existingPipelineId">ExistingPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#existing_pipeline_id DataDatabricksPostgresSyncedTable#existing_pipeline_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.extraColumns">ExtraColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#extra_columns DataDatabricksPostgresSyncedTable#extra_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#new_pipeline_spec DataDatabricksPostgresSyncedTable#new_pipeline_spec}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#postgres_database DataDatabricksPostgresSyncedTable#postgres_database}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#primary_key_columns DataDatabricksPostgresSyncedTable#primary_key_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#scheduling_policy DataDatabricksPostgresSyncedTable#scheduling_policy}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.sourceTableFullName">SourceTableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#source_table_full_name DataDatabricksPostgresSyncedTable#source_table_full_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.timeseriesKey">TimeseriesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#timeseries_key DataDatabricksPostgresSyncedTable#timeseries_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.typeOverrides">TypeOverrides</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#type_overrides DataDatabricksPostgresSyncedTable#type_overrides}. |

---

##### `AcceleratedSync`<sup>Optional</sup> <a name="AcceleratedSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.acceleratedSync"></a>

```csharp
public bool|IResolvable AcceleratedSync { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#accelerated_sync DataDatabricksPostgresSyncedTable#accelerated_sync}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#branch DataDatabricksPostgresSyncedTable#branch}.

---

##### `CreateDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.createDatabaseObjectsIfMissing"></a>

```csharp
public bool|IResolvable CreateDatabaseObjectsIfMissing { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#create_database_objects_if_missing DataDatabricksPostgresSyncedTable#create_database_objects_if_missing}.

---

##### `ExistingPipelineId`<sup>Optional</sup> <a name="ExistingPipelineId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.existingPipelineId"></a>

```csharp
public string ExistingPipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#existing_pipeline_id DataDatabricksPostgresSyncedTable#existing_pipeline_id}.

---

##### `ExtraColumns`<sup>Optional</sup> <a name="ExtraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.extraColumns"></a>

```csharp
public IResolvable|DataDatabricksPostgresSyncedTableSpecExtraColumns[] ExtraColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#extra_columns DataDatabricksPostgresSyncedTable#extra_columns}.

---

##### `NewPipelineSpec`<sup>Optional</sup> <a name="NewPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.newPipelineSpec"></a>

```csharp
public DataDatabricksPostgresSyncedTableSpecNewPipelineSpec NewPipelineSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#new_pipeline_spec DataDatabricksPostgresSyncedTable#new_pipeline_spec}.

---

##### `PostgresDatabase`<sup>Optional</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#postgres_database DataDatabricksPostgresSyncedTable#postgres_database}.

---

##### `PrimaryKeyColumns`<sup>Optional</sup> <a name="PrimaryKeyColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.primaryKeyColumns"></a>

```csharp
public string[] PrimaryKeyColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#primary_key_columns DataDatabricksPostgresSyncedTable#primary_key_columns}.

---

##### `SchedulingPolicy`<sup>Optional</sup> <a name="SchedulingPolicy" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.schedulingPolicy"></a>

```csharp
public string SchedulingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#scheduling_policy DataDatabricksPostgresSyncedTable#scheduling_policy}.

---

##### `SourceTableFullName`<sup>Optional</sup> <a name="SourceTableFullName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.sourceTableFullName"></a>

```csharp
public string SourceTableFullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#source_table_full_name DataDatabricksPostgresSyncedTable#source_table_full_name}.

---

##### `TimeseriesKey`<sup>Optional</sup> <a name="TimeseriesKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.timeseriesKey"></a>

```csharp
public string TimeseriesKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#timeseries_key DataDatabricksPostgresSyncedTable#timeseries_key}.

---

##### `TypeOverrides`<sup>Optional</sup> <a name="TypeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec.property.typeOverrides"></a>

```csharp
public IResolvable|DataDatabricksPostgresSyncedTableSpecTypeOverrides[] TypeOverrides { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#type_overrides DataDatabricksPostgresSyncedTable#type_overrides}.

---

### DataDatabricksPostgresSyncedTableSpecExtraColumns <a name="DataDatabricksPostgresSyncedTableSpecExtraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableSpecExtraColumns {
    string ColumnName,
    string ColumnType,
    string Compute = null,
    string Maintenance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#column_name DataDatabricksPostgresSyncedTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.columnType">ColumnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#column_type DataDatabricksPostgresSyncedTable#column_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.compute">Compute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#compute DataDatabricksPostgresSyncedTable#compute}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.maintenance">Maintenance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#maintenance DataDatabricksPostgresSyncedTable#maintenance}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#column_name DataDatabricksPostgresSyncedTable#column_name}.

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.columnType"></a>

```csharp
public string ColumnType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#column_type DataDatabricksPostgresSyncedTable#column_type}.

---

##### `Compute`<sup>Optional</sup> <a name="Compute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.compute"></a>

```csharp
public string Compute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#compute DataDatabricksPostgresSyncedTable#compute}.

---

##### `Maintenance`<sup>Optional</sup> <a name="Maintenance" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns.property.maintenance"></a>

```csharp
public string Maintenance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#maintenance DataDatabricksPostgresSyncedTable#maintenance}.

---

### DataDatabricksPostgresSyncedTableSpecNewPipelineSpec <a name="DataDatabricksPostgresSyncedTableSpecNewPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableSpecNewPipelineSpec {
    string BudgetPolicyId = null,
    string PipelineChannel = null,
    string StorageCatalog = null,
    string StorageSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#budget_policy_id DataDatabricksPostgresSyncedTable#budget_policy_id}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.pipelineChannel">PipelineChannel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#pipeline_channel DataDatabricksPostgresSyncedTable#pipeline_channel}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog">StorageCatalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#storage_catalog DataDatabricksPostgresSyncedTable#storage_catalog}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageSchema">StorageSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#storage_schema DataDatabricksPostgresSyncedTable#storage_schema}. |

---

##### `BudgetPolicyId`<sup>Optional</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.budgetPolicyId"></a>

```csharp
public string BudgetPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#budget_policy_id DataDatabricksPostgresSyncedTable#budget_policy_id}.

---

##### `PipelineChannel`<sup>Optional</sup> <a name="PipelineChannel" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.pipelineChannel"></a>

```csharp
public string PipelineChannel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#pipeline_channel DataDatabricksPostgresSyncedTable#pipeline_channel}.

---

##### `StorageCatalog`<sup>Optional</sup> <a name="StorageCatalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageCatalog"></a>

```csharp
public string StorageCatalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#storage_catalog DataDatabricksPostgresSyncedTable#storage_catalog}.

---

##### `StorageSchema`<sup>Optional</sup> <a name="StorageSchema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec.property.storageSchema"></a>

```csharp
public string StorageSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#storage_schema DataDatabricksPostgresSyncedTable#storage_schema}.

---

### DataDatabricksPostgresSyncedTableSpecTypeOverrides <a name="DataDatabricksPostgresSyncedTableSpecTypeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableSpecTypeOverrides {
    string ColumnName,
    string PgType,
    double Size = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#column_name DataDatabricksPostgresSyncedTable#column_name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.pgType">PgType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#pg_type DataDatabricksPostgresSyncedTable#pg_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#size DataDatabricksPostgresSyncedTable#size}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#column_name DataDatabricksPostgresSyncedTable#column_name}.

---

##### `PgType`<sup>Required</sup> <a name="PgType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.pgType"></a>

```csharp
public string PgType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#pg_type DataDatabricksPostgresSyncedTable#pg_type}.

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.129.0/docs/data-sources/postgres_synced_table#size DataDatabricksPostgresSyncedTable#size}.

---

### DataDatabricksPostgresSyncedTableStatus <a name="DataDatabricksPostgresSyncedTableStatus" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableStatus {

};
```


### DataDatabricksPostgresSyncedTableStatusLastSync <a name="DataDatabricksPostgresSyncedTableStatusLastSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableStatusLastSync {

};
```


### DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo <a name="DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo {

};
```


### DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress <a name="DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPostgresSyncedTableProviderConfigOutputReference <a name="DataDatabricksPostgresSyncedTableProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresSyncedTableProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableProviderConfig">DataDatabricksPostgresSyncedTableProviderConfig</a>

---


### DataDatabricksPostgresSyncedTableSpecExtraColumnsList <a name="DataDatabricksPostgresSyncedTableSpecExtraColumnsList" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableSpecExtraColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.get"></a>

```csharp
private DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresSyncedTableSpecExtraColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]

---


### DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference <a name="DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resetCompute">ResetCompute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resetMaintenance">ResetMaintenance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompute` <a name="ResetCompute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resetCompute"></a>

```csharp
private void ResetCompute()
```

##### `ResetMaintenance` <a name="ResetMaintenance" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.resetMaintenance"></a>

```csharp
private void ResetMaintenance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnTypeInput">ColumnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.computeInput">ComputeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenanceInput">MaintenanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnType">ColumnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.compute">Compute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenance">Maintenance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `ColumnTypeInput`<sup>Optional</sup> <a name="ColumnTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnTypeInput"></a>

```csharp
public string ColumnTypeInput { get; }
```

- *Type:* string

---

##### `ComputeInput`<sup>Optional</sup> <a name="ComputeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.computeInput"></a>

```csharp
public string ComputeInput { get; }
```

- *Type:* string

---

##### `MaintenanceInput`<sup>Optional</sup> <a name="MaintenanceInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenanceInput"></a>

```csharp
public string MaintenanceInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.columnType"></a>

```csharp
public string ColumnType { get; }
```

- *Type:* string

---

##### `Compute`<sup>Required</sup> <a name="Compute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.compute"></a>

```csharp
public string Compute { get; }
```

- *Type:* string

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.maintenance"></a>

```csharp
public string Maintenance { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresSyncedTableSpecExtraColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>

---


### DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference <a name="DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId">ResetBudgetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetPipelineChannel">ResetPipelineChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">ResetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema">ResetStorageSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBudgetPolicyId` <a name="ResetBudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetBudgetPolicyId"></a>

```csharp
private void ResetBudgetPolicyId()
```

##### `ResetPipelineChannel` <a name="ResetPipelineChannel" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetPipelineChannel"></a>

```csharp
private void ResetPipelineChannel()
```

##### `ResetStorageCatalog` <a name="ResetStorageCatalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```csharp
private void ResetStorageCatalog()
```

##### `ResetStorageSchema` <a name="ResetStorageSchema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```csharp
private void ResetStorageSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput">BudgetPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannelInput">PipelineChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">StorageCatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">StorageSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId">BudgetPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannel">PipelineChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog">StorageCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema">StorageSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BudgetPolicyIdInput`<sup>Optional</sup> <a name="BudgetPolicyIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyIdInput"></a>

```csharp
public string BudgetPolicyIdInput { get; }
```

- *Type:* string

---

##### `PipelineChannelInput`<sup>Optional</sup> <a name="PipelineChannelInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannelInput"></a>

```csharp
public string PipelineChannelInput { get; }
```

- *Type:* string

---

##### `StorageCatalogInput`<sup>Optional</sup> <a name="StorageCatalogInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```csharp
public string StorageCatalogInput { get; }
```

- *Type:* string

---

##### `StorageSchemaInput`<sup>Optional</sup> <a name="StorageSchemaInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```csharp
public string StorageSchemaInput { get; }
```

- *Type:* string

---

##### `BudgetPolicyId`<sup>Required</sup> <a name="BudgetPolicyId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.budgetPolicyId"></a>

```csharp
public string BudgetPolicyId { get; }
```

- *Type:* string

---

##### `PipelineChannel`<sup>Required</sup> <a name="PipelineChannel" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.pipelineChannel"></a>

```csharp
public string PipelineChannel { get; }
```

- *Type:* string

---

##### `StorageCatalog`<sup>Required</sup> <a name="StorageCatalog" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```csharp
public string StorageCatalog { get; }
```

- *Type:* string

---

##### `StorageSchema`<sup>Required</sup> <a name="StorageSchema" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```csharp
public string StorageSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresSyncedTableSpecNewPipelineSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

---


### DataDatabricksPostgresSyncedTableSpecOutputReference <a name="DataDatabricksPostgresSyncedTableSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putExtraColumns">PutExtraColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec">PutNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putTypeOverrides">PutTypeOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetAcceleratedSync">ResetAcceleratedSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">ResetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExistingPipelineId">ResetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExtraColumns">ResetExtraColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetNewPipelineSpec">ResetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPostgresDatabase">ResetPostgresDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns">ResetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSchedulingPolicy">ResetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSourceTableFullName">ResetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTimeseriesKey">ResetTimeseriesKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTypeOverrides">ResetTypeOverrides</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtraColumns` <a name="PutExtraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putExtraColumns"></a>

```csharp
private void PutExtraColumns(IResolvable|DataDatabricksPostgresSyncedTableSpecExtraColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putExtraColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]

---

##### `PutNewPipelineSpec` <a name="PutNewPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec"></a>

```csharp
private void PutNewPipelineSpec(DataDatabricksPostgresSyncedTableSpecNewPipelineSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `PutTypeOverrides` <a name="PutTypeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putTypeOverrides"></a>

```csharp
private void PutTypeOverrides(IResolvable|DataDatabricksPostgresSyncedTableSpecTypeOverrides[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.putTypeOverrides.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]

---

##### `ResetAcceleratedSync` <a name="ResetAcceleratedSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetAcceleratedSync"></a>

```csharp
private void ResetAcceleratedSync()
```

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetBranch"></a>

```csharp
private void ResetBranch()
```

##### `ResetCreateDatabaseObjectsIfMissing` <a name="ResetCreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```csharp
private void ResetCreateDatabaseObjectsIfMissing()
```

##### `ResetExistingPipelineId` <a name="ResetExistingPipelineId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExistingPipelineId"></a>

```csharp
private void ResetExistingPipelineId()
```

##### `ResetExtraColumns` <a name="ResetExtraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetExtraColumns"></a>

```csharp
private void ResetExtraColumns()
```

##### `ResetNewPipelineSpec` <a name="ResetNewPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetNewPipelineSpec"></a>

```csharp
private void ResetNewPipelineSpec()
```

##### `ResetPostgresDatabase` <a name="ResetPostgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPostgresDatabase"></a>

```csharp
private void ResetPostgresDatabase()
```

##### `ResetPrimaryKeyColumns` <a name="ResetPrimaryKeyColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```csharp
private void ResetPrimaryKeyColumns()
```

##### `ResetSchedulingPolicy` <a name="ResetSchedulingPolicy" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSchedulingPolicy"></a>

```csharp
private void ResetSchedulingPolicy()
```

##### `ResetSourceTableFullName` <a name="ResetSourceTableFullName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetSourceTableFullName"></a>

```csharp
private void ResetSourceTableFullName()
```

##### `ResetTimeseriesKey` <a name="ResetTimeseriesKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTimeseriesKey"></a>

```csharp
private void ResetTimeseriesKey()
```

##### `ResetTypeOverrides` <a name="ResetTypeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.resetTypeOverrides"></a>

```csharp
private void ResetTypeOverrides()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.extraColumns">ExtraColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList">DataDatabricksPostgresSyncedTableSpecExtraColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference">DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.typeOverrides">TypeOverrides</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList">DataDatabricksPostgresSyncedTableSpecTypeOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.acceleratedSyncInput">AcceleratedSyncInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">CreateDatabaseObjectsIfMissingInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput">ExistingPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.extraColumnsInput">ExtraColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput">NewPipelineSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput">PostgresDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput">PrimaryKeyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput">SchedulingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput">SourceTableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput">TimeseriesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.typeOverridesInput">TypeOverridesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.acceleratedSync">AcceleratedSync</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineId">ExistingPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullName">SourceTableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKey">TimeseriesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec">DataDatabricksPostgresSyncedTableSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExtraColumns`<sup>Required</sup> <a name="ExtraColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.extraColumns"></a>

```csharp
public DataDatabricksPostgresSyncedTableSpecExtraColumnsList ExtraColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumnsList">DataDatabricksPostgresSyncedTableSpecExtraColumnsList</a>

---

##### `NewPipelineSpec`<sup>Required</sup> <a name="NewPipelineSpec" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpec"></a>

```csharp
public DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference NewPipelineSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference">DataDatabricksPostgresSyncedTableSpecNewPipelineSpecOutputReference</a>

---

##### `TypeOverrides`<sup>Required</sup> <a name="TypeOverrides" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.typeOverrides"></a>

```csharp
public DataDatabricksPostgresSyncedTableSpecTypeOverridesList TypeOverrides { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList">DataDatabricksPostgresSyncedTableSpecTypeOverridesList</a>

---

##### `AcceleratedSyncInput`<sup>Optional</sup> <a name="AcceleratedSyncInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.acceleratedSyncInput"></a>

```csharp
public bool|IResolvable AcceleratedSyncInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `CreateDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissingInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```csharp
public bool|IResolvable CreateDatabaseObjectsIfMissingInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExistingPipelineIdInput`<sup>Optional</sup> <a name="ExistingPipelineIdInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineIdInput"></a>

```csharp
public string ExistingPipelineIdInput { get; }
```

- *Type:* string

---

##### `ExtraColumnsInput`<sup>Optional</sup> <a name="ExtraColumnsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.extraColumnsInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresSyncedTableSpecExtraColumns[] ExtraColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecExtraColumns">DataDatabricksPostgresSyncedTableSpecExtraColumns</a>[]

---

##### `NewPipelineSpecInput`<sup>Optional</sup> <a name="NewPipelineSpecInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.newPipelineSpecInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresSyncedTableSpecNewPipelineSpec NewPipelineSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecNewPipelineSpec">DataDatabricksPostgresSyncedTableSpecNewPipelineSpec</a>

---

##### `PostgresDatabaseInput`<sup>Optional</sup> <a name="PostgresDatabaseInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabaseInput"></a>

```csharp
public string PostgresDatabaseInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyColumnsInput`<sup>Optional</sup> <a name="PrimaryKeyColumnsInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```csharp
public string[] PrimaryKeyColumnsInput { get; }
```

- *Type:* string[]

---

##### `SchedulingPolicyInput`<sup>Optional</sup> <a name="SchedulingPolicyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicyInput"></a>

```csharp
public string SchedulingPolicyInput { get; }
```

- *Type:* string

---

##### `SourceTableFullNameInput`<sup>Optional</sup> <a name="SourceTableFullNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```csharp
public string SourceTableFullNameInput { get; }
```

- *Type:* string

---

##### `TimeseriesKeyInput`<sup>Optional</sup> <a name="TimeseriesKeyInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKeyInput"></a>

```csharp
public string TimeseriesKeyInput { get; }
```

- *Type:* string

---

##### `TypeOverridesInput`<sup>Optional</sup> <a name="TypeOverridesInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.typeOverridesInput"></a>

```csharp
public IResolvable|DataDatabricksPostgresSyncedTableSpecTypeOverrides[] TypeOverridesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]

---

##### `AcceleratedSync`<sup>Required</sup> <a name="AcceleratedSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.acceleratedSync"></a>

```csharp
public bool|IResolvable AcceleratedSync { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `CreateDatabaseObjectsIfMissing`<sup>Required</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```csharp
public bool|IResolvable CreateDatabaseObjectsIfMissing { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExistingPipelineId`<sup>Required</sup> <a name="ExistingPipelineId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.existingPipelineId"></a>

```csharp
public string ExistingPipelineId { get; }
```

- *Type:* string

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; }
```

- *Type:* string

---

##### `PrimaryKeyColumns`<sup>Required</sup> <a name="PrimaryKeyColumns" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.primaryKeyColumns"></a>

```csharp
public string[] PrimaryKeyColumns { get; }
```

- *Type:* string[]

---

##### `SchedulingPolicy`<sup>Required</sup> <a name="SchedulingPolicy" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.schedulingPolicy"></a>

```csharp
public string SchedulingPolicy { get; }
```

- *Type:* string

---

##### `SourceTableFullName`<sup>Required</sup> <a name="SourceTableFullName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.sourceTableFullName"></a>

```csharp
public string SourceTableFullName { get; }
```

- *Type:* string

---

##### `TimeseriesKey`<sup>Required</sup> <a name="TimeseriesKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.timeseriesKey"></a>

```csharp
public string TimeseriesKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresSyncedTableSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpec">DataDatabricksPostgresSyncedTableSpec</a>

---


### DataDatabricksPostgresSyncedTableSpecTypeOverridesList <a name="DataDatabricksPostgresSyncedTableSpecTypeOverridesList" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableSpecTypeOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.get"></a>

```csharp
private DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresSyncedTableSpecTypeOverrides[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>[]

---


### DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference <a name="DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSize` <a name="ResetSize" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.resetSize"></a>

```csharp
private void ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.pgTypeInput">PgTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.pgType">PgType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `PgTypeInput`<sup>Optional</sup> <a name="PgTypeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.pgTypeInput"></a>

```csharp
public string PgTypeInput { get; }
```

- *Type:* string

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `PgType`<sup>Required</sup> <a name="PgType" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.pgType"></a>

```csharp
public string PgType { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverridesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksPostgresSyncedTableSpecTypeOverrides InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableSpecTypeOverrides">DataDatabricksPostgresSyncedTableSpecTypeOverrides</a>

---


### DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference <a name="DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime">DeltaCommitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">DeltaCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaCommitTime`<sup>Required</sup> <a name="DeltaCommitTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTime"></a>

```csharp
public string DeltaCommitTime { get; }
```

- *Type:* string

---

##### `DeltaCommitVersion`<sup>Required</sup> <a name="DeltaCommitVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```csharp
public double DeltaCommitVersion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfo</a>

---


### DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference <a name="DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo">DeltaTableSyncInfo</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime">SyncEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime">SyncStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync">DataDatabricksPostgresSyncedTableStatusLastSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaTableSyncInfo`<sup>Required</sup> <a name="DeltaTableSyncInfo" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```csharp
public DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference DeltaTableSyncInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `SyncEndTime`<sup>Required</sup> <a name="SyncEndTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncEndTime"></a>

```csharp
public string SyncEndTime { get; }
```

- *Type:* string

---

##### `SyncStartTime`<sup>Required</sup> <a name="SyncStartTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.syncStartTime"></a>

```csharp
public string SyncStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresSyncedTableStatusLastSync InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSync">DataDatabricksPostgresSyncedTableStatusLastSync</a>

---


### DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference <a name="DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgress</a>

---


### DataDatabricksPostgresSyncedTableStatusOutputReference <a name="DataDatabricksPostgresSyncedTableStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksPostgresSyncedTableStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.detailedState">DetailedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSync">LastSync</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSyncTime">LastSyncTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress">OngoingSyncProgress</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState">UnityCatalogProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus">DataDatabricksPostgresSyncedTableStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DetailedState`<sup>Required</sup> <a name="DetailedState" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.detailedState"></a>

```csharp
public string DetailedState { get; }
```

- *Type:* string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `LastSync`<sup>Required</sup> <a name="LastSync" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSync"></a>

```csharp
public DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference LastSync { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference">DataDatabricksPostgresSyncedTableStatusLastSyncOutputReference</a>

---

##### `LastSyncTime`<sup>Required</sup> <a name="LastSyncTime" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.lastSyncTime"></a>

```csharp
public string LastSyncTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `OngoingSyncProgress`<sup>Required</sup> <a name="OngoingSyncProgress" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.ongoingSyncProgress"></a>

```csharp
public DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference OngoingSyncProgress { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference">DataDatabricksPostgresSyncedTableStatusOngoingSyncProgressOutputReference</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.provisioningPhase"></a>

```csharp
public string ProvisioningPhase { get; }
```

- *Type:* string

---

##### `UnityCatalogProvisioningState`<sup>Required</sup> <a name="UnityCatalogProvisioningState" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.unityCatalogProvisioningState"></a>

```csharp
public string UnityCatalogProvisioningState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksPostgresSyncedTableStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksPostgresSyncedTable.DataDatabricksPostgresSyncedTableStatus">DataDatabricksPostgresSyncedTableStatus</a>

---



