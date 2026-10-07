# `dataDatabricksMasonManagedMemoryStore` Submodule <a name="`dataDatabricksMasonManagedMemoryStore` Submodule" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMasonManagedMemoryStore <a name="DataDatabricksMasonManagedMemoryStore" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store databricks_mason_managed_memory_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStore(Construct Scope, string Id, DataDatabricksMasonManagedMemoryStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig">DataDatabricksMasonManagedMemoryStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig">DataDatabricksMasonManagedMemoryStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksMasonManagedMemoryStoreProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMasonManagedMemoryStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMasonManagedMemoryStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMasonManagedMemoryStore.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksMasonManagedMemoryStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksMasonManagedMemoryStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMasonManagedMemoryStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMasonManagedMemoryStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksMasonManagedMemoryStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.creatorUserId">CreatorUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.ownerUserId">OwnerUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.storageBackend">StorageBackend</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference">DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.workspaceId">WorkspaceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CreatorUserId`<sup>Required</sup> <a name="CreatorUserId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.creatorUserId"></a>

```csharp
public string CreatorUserId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `OwnerUserId`<sup>Required</sup> <a name="OwnerUserId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.ownerUserId"></a>

```csharp
public string OwnerUserId { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.providerConfig"></a>

```csharp
public DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference">DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference</a>

---

##### `StorageBackend`<sup>Required</sup> <a name="StorageBackend" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.storageBackend"></a>

```csharp
public DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference StorageBackend { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference">DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.workspaceId"></a>

```csharp
public double WorkspaceId { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksMasonManagedMemoryStoreProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMasonManagedMemoryStoreConfig <a name="DataDatabricksMasonManagedMemoryStoreConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksMasonManagedMemoryStoreProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#name DataDatabricksMasonManagedMemoryStore#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#provider_config DataDatabricksMasonManagedMemoryStore#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#name DataDatabricksMasonManagedMemoryStore#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreConfig.property.providerConfig"></a>

```csharp
public DataDatabricksMasonManagedMemoryStoreProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#provider_config DataDatabricksMasonManagedMemoryStore#provider_config}.

---

### DataDatabricksMasonManagedMemoryStoreProviderConfig <a name="DataDatabricksMasonManagedMemoryStoreProviderConfig" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoreProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#workspace_id DataDatabricksMasonManagedMemoryStore#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.137.0/docs/data-sources/mason_managed_memory_store#workspace_id DataDatabricksMasonManagedMemoryStore#workspace_id}.

---

### DataDatabricksMasonManagedMemoryStoreStorageBackend <a name="DataDatabricksMasonManagedMemoryStoreStorageBackend" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoreStorageBackend {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference <a name="DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksMasonManagedMemoryStoreProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreProviderConfig">DataDatabricksMasonManagedMemoryStoreProviderConfig</a>

---


### DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference <a name="DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.backendId">BackendId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.backendType">BackendType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend">DataDatabricksMasonManagedMemoryStoreStorageBackend</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendId`<sup>Required</sup> <a name="BackendId" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.backendId"></a>

```csharp
public string BackendId { get; }
```

- *Type:* string

---

##### `BackendType`<sup>Required</sup> <a name="BackendType" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.backendType"></a>

```csharp
public string BackendType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackendOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksMasonManagedMemoryStoreStorageBackend InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksMasonManagedMemoryStore.DataDatabricksMasonManagedMemoryStoreStorageBackend">DataDatabricksMasonManagedMemoryStoreStorageBackend</a>

---



