# `dataDatabricksAiSearchIndex` Submodule <a name="`dataDatabricksAiSearchIndex` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiSearchIndex <a name="DataDatabricksAiSearchIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index databricks_ai_search_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndex(Construct Scope, string Id, DataDatabricksAiSearchIndexConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig">DataDatabricksAiSearchIndexConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig">DataDatabricksAiSearchIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksAiSearchIndexProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a>

---

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAiSearchIndex resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAiSearchIndex.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAiSearchIndex.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAiSearchIndex.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAiSearchIndex.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAiSearchIndex resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAiSearchIndex to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAiSearchIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiSearchIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.deltaSyncIndexSpec">DeltaSyncIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference">DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.directAccessIndexSpec">DirectAccessIndexSpec</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference">DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.indexSubtype">IndexSubtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.indexType">IndexType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference">DataDatabricksAiSearchIndexProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.status">Status</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference">DataDatabricksAiSearchIndexStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.providerConfigInput">ProviderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `DeltaSyncIndexSpec`<sup>Required</sup> <a name="DeltaSyncIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.deltaSyncIndexSpec"></a>

```csharp
public DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference DeltaSyncIndexSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference">DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference</a>

---

##### `DirectAccessIndexSpec`<sup>Required</sup> <a name="DirectAccessIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.directAccessIndexSpec"></a>

```csharp
public DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference DirectAccessIndexSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference">DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `IndexSubtype`<sup>Required</sup> <a name="IndexSubtype" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.indexSubtype"></a>

```csharp
public string IndexSubtype { get; }
```

- *Type:* string

---

##### `IndexType`<sup>Required</sup> <a name="IndexType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.indexType"></a>

```csharp
public string IndexType { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.providerConfig"></a>

```csharp
public DataDatabricksAiSearchIndexProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference">DataDatabricksAiSearchIndexProviderConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.status"></a>

```csharp
public DataDatabricksAiSearchIndexStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference">DataDatabricksAiSearchIndexStatusOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.providerConfigInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexProviderConfig ProviderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndex.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiSearchIndexConfig <a name="DataDatabricksAiSearchIndexConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksAiSearchIndexProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#provider_config DataDatabricksAiSearchIndex#provider_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexConfig.property.providerConfig"></a>

```csharp
public DataDatabricksAiSearchIndexProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#provider_config DataDatabricksAiSearchIndex#provider_config}.

---

### DataDatabricksAiSearchIndexDeltaSyncIndexSpec <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDeltaSyncIndexSpec {
    string PipelineType,
    string[] ColumnsToSync = null,
    IResolvable|DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumns = null,
    IResolvable|DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumns = null,
    string EmbeddingWritebackTable = null,
    string SourceTable = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.pipelineType">PipelineType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#pipeline_type DataDatabricksAiSearchIndex#pipeline_type}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.columnsToSync">ColumnsToSync</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#columns_to_sync DataDatabricksAiSearchIndex#columns_to_sync}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable">EmbeddingWritebackTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_writeback_table DataDatabricksAiSearchIndex#embedding_writeback_table}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.sourceTable">SourceTable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#source_table DataDatabricksAiSearchIndex#source_table}. |

---

##### `PipelineType`<sup>Required</sup> <a name="PipelineType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.pipelineType"></a>

```csharp
public string PipelineType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#pipeline_type DataDatabricksAiSearchIndex#pipeline_type}.

---

##### `ColumnsToSync`<sup>Optional</sup> <a name="ColumnsToSync" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.columnsToSync"></a>

```csharp
public string[] ColumnsToSync { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#columns_to_sync DataDatabricksAiSearchIndex#columns_to_sync}.

---

##### `EmbeddingSourceColumns`<sup>Optional</sup> <a name="EmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingSourceColumns"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}.

---

##### `EmbeddingVectorColumns`<sup>Optional</sup> <a name="EmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingVectorColumns"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}.

---

##### `EmbeddingWritebackTable`<sup>Optional</sup> <a name="EmbeddingWritebackTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.embeddingWritebackTable"></a>

```csharp
public string EmbeddingWritebackTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_writeback_table DataDatabricksAiSearchIndex#embedding_writeback_table}.

---

##### `SourceTable`<sup>Optional</sup> <a name="SourceTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec.property.sourceTable"></a>

```csharp
public string SourceTable { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#source_table DataDatabricksAiSearchIndex#source_table}.

---

### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns {
    string EmbeddingModelEndpoint = null,
    string ModelEndpointNameForQuery = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">EmbeddingModelEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">ModelEndpointNameForQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |

---

##### `EmbeddingModelEndpoint`<sup>Optional</sup> <a name="EmbeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```csharp
public string EmbeddingModelEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}.

---

##### `ModelEndpointNameForQuery`<sup>Optional</sup> <a name="ModelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```csharp
public string ModelEndpointNameForQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns {
    double EmbeddingDimension = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |

---

##### `EmbeddingDimension`<sup>Optional</sup> <a name="EmbeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

### DataDatabricksAiSearchIndexDirectAccessIndexSpec <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpec" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDirectAccessIndexSpec {
    IResolvable|DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumns = null,
    IResolvable|DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumns = null,
    string SchemaJson = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.schemaJson">SchemaJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#schema_json DataDatabricksAiSearchIndex#schema_json}. |

---

##### `EmbeddingSourceColumns`<sup>Optional</sup> <a name="EmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.embeddingSourceColumns"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_source_columns DataDatabricksAiSearchIndex#embedding_source_columns}.

---

##### `EmbeddingVectorColumns`<sup>Optional</sup> <a name="EmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.embeddingVectorColumns"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_vector_columns DataDatabricksAiSearchIndex#embedding_vector_columns}.

---

##### `SchemaJson`<sup>Optional</sup> <a name="SchemaJson" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec.property.schemaJson"></a>

```csharp
public string SchemaJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#schema_json DataDatabricksAiSearchIndex#schema_json}.

---

### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns {
    string EmbeddingModelEndpoint = null,
    string ModelEndpointNameForQuery = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint">EmbeddingModelEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery">ModelEndpointNameForQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |

---

##### `EmbeddingModelEndpoint`<sup>Optional</sup> <a name="EmbeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.embeddingModelEndpoint"></a>

```csharp
public string EmbeddingModelEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_model_endpoint DataDatabricksAiSearchIndex#embedding_model_endpoint}.

---

##### `ModelEndpointNameForQuery`<sup>Optional</sup> <a name="ModelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.modelEndpointNameForQuery"></a>

```csharp
public string ModelEndpointNameForQuery { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#model_endpoint_name_for_query DataDatabricksAiSearchIndex#model_endpoint_name_for_query}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns {
    double EmbeddingDimension = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}. |

---

##### `EmbeddingDimension`<sup>Optional</sup> <a name="EmbeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#embedding_dimension DataDatabricksAiSearchIndex#embedding_dimension}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#name DataDatabricksAiSearchIndex#name}.

---

### DataDatabricksAiSearchIndexProviderConfig <a name="DataDatabricksAiSearchIndexProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexProviderConfig {
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#workspace_id DataDatabricksAiSearchIndex#workspace_id}. |

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_search_index#workspace_id DataDatabricksAiSearchIndex#workspace_id}.

---

### DataDatabricksAiSearchIndexStatus <a name="DataDatabricksAiSearchIndexStatus" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexStatus {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get"></a>

```csharp
private DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---


### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">ResetEmbeddingModelEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">ResetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingModelEndpoint` <a name="ResetEmbeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```csharp
private void ResetEmbeddingModelEndpoint()
```

##### `ResetModelEndpointNameForQuery` <a name="ResetModelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```csharp
private void ResetModelEndpointNameForQuery()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">EmbeddingModelEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">ModelEndpointNameForQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">EmbeddingModelEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">ModelEndpointNameForQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpointInput`<sup>Optional</sup> <a name="EmbeddingModelEndpointInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```csharp
public string EmbeddingModelEndpointInput { get; }
```

- *Type:* string

---

##### `ModelEndpointNameForQueryInput`<sup>Optional</sup> <a name="ModelEndpointNameForQueryInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```csharp
public string ModelEndpointNameForQueryInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpoint`<sup>Required</sup> <a name="EmbeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```csharp
public string EmbeddingModelEndpoint { get; }
```

- *Type:* string

---

##### `ModelEndpointNameForQuery`<sup>Required</sup> <a name="ModelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```csharp
public string ModelEndpointNameForQuery { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>

---


### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get"></a>

```csharp
private DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---


### DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">ResetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingDimension` <a name="ResetEmbeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```csharp
private void ResetEmbeddingDimension()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">EmbeddingDimensionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingDimensionInput`<sup>Optional</sup> <a name="EmbeddingDimensionInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```csharp
public double EmbeddingDimensionInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingDimension`<sup>Required</sup> <a name="EmbeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>

---


### DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference <a name="DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns">PutEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns">PutEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetColumnsToSync">ResetColumnsToSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns">ResetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns">ResetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable">ResetEmbeddingWritebackTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable">ResetSourceTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmbeddingSourceColumns` <a name="PutEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```csharp
private void PutEmbeddingSourceColumns(IResolvable|DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `PutEmbeddingVectorColumns` <a name="PutEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```csharp
private void PutEmbeddingVectorColumns(IResolvable|DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `ResetColumnsToSync` <a name="ResetColumnsToSync" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetColumnsToSync"></a>

```csharp
private void ResetColumnsToSync()
```

##### `ResetEmbeddingSourceColumns` <a name="ResetEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```csharp
private void ResetEmbeddingSourceColumns()
```

##### `ResetEmbeddingVectorColumns` <a name="ResetEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```csharp
private void ResetEmbeddingVectorColumns()
```

##### `ResetEmbeddingWritebackTable` <a name="ResetEmbeddingWritebackTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetEmbeddingWritebackTable"></a>

```csharp
private void ResetEmbeddingWritebackTable()
```

##### `ResetSourceTable` <a name="ResetSourceTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.resetSourceTable"></a>

```csharp
private void ResetSourceTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput">ColumnsToSyncInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput">EmbeddingSourceColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput">EmbeddingVectorColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput">EmbeddingWritebackTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput">PipelineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput">SourceTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSync">ColumnsToSync</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable">EmbeddingWritebackTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType">PipelineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable">SourceTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec">DataDatabricksAiSearchIndexDeltaSyncIndexSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingSourceColumns`<sup>Required</sup> <a name="EmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```csharp
public DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList EmbeddingSourceColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList</a>

---

##### `EmbeddingVectorColumns`<sup>Required</sup> <a name="EmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```csharp
public DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList EmbeddingVectorColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `ColumnsToSyncInput`<sup>Optional</sup> <a name="ColumnsToSyncInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSyncInput"></a>

```csharp
public string[] ColumnsToSyncInput { get; }
```

- *Type:* string[]

---

##### `EmbeddingSourceColumnsInput`<sup>Optional</sup> <a name="EmbeddingSourceColumnsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns</a>[]

---

##### `EmbeddingVectorColumnsInput`<sup>Optional</sup> <a name="EmbeddingVectorColumnsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns</a>[]

---

##### `EmbeddingWritebackTableInput`<sup>Optional</sup> <a name="EmbeddingWritebackTableInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTableInput"></a>

```csharp
public string EmbeddingWritebackTableInput { get; }
```

- *Type:* string

---

##### `PipelineTypeInput`<sup>Optional</sup> <a name="PipelineTypeInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineTypeInput"></a>

```csharp
public string PipelineTypeInput { get; }
```

- *Type:* string

---

##### `SourceTableInput`<sup>Optional</sup> <a name="SourceTableInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTableInput"></a>

```csharp
public string SourceTableInput { get; }
```

- *Type:* string

---

##### `ColumnsToSync`<sup>Required</sup> <a name="ColumnsToSync" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.columnsToSync"></a>

```csharp
public string[] ColumnsToSync { get; }
```

- *Type:* string[]

---

##### `EmbeddingWritebackTable`<sup>Required</sup> <a name="EmbeddingWritebackTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.embeddingWritebackTable"></a>

```csharp
public string EmbeddingWritebackTable { get; }
```

- *Type:* string

---

##### `PipelineType`<sup>Required</sup> <a name="PipelineType" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.pipelineType"></a>

```csharp
public string PipelineType { get; }
```

- *Type:* string

---

##### `SourceTable`<sup>Required</sup> <a name="SourceTable" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.sourceTable"></a>

```csharp
public string SourceTable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiSearchIndexDeltaSyncIndexSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDeltaSyncIndexSpec">DataDatabricksAiSearchIndexDeltaSyncIndexSpec</a>

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get"></a>

```csharp
private DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint">ResetEmbeddingModelEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery">ResetModelEndpointNameForQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingModelEndpoint` <a name="ResetEmbeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetEmbeddingModelEndpoint"></a>

```csharp
private void ResetEmbeddingModelEndpoint()
```

##### `ResetModelEndpointNameForQuery` <a name="ResetModelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetModelEndpointNameForQuery"></a>

```csharp
private void ResetModelEndpointNameForQuery()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput">EmbeddingModelEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput">ModelEndpointNameForQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint">EmbeddingModelEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery">ModelEndpointNameForQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpointInput`<sup>Optional</sup> <a name="EmbeddingModelEndpointInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpointInput"></a>

```csharp
public string EmbeddingModelEndpointInput { get; }
```

- *Type:* string

---

##### `ModelEndpointNameForQueryInput`<sup>Optional</sup> <a name="ModelEndpointNameForQueryInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQueryInput"></a>

```csharp
public string ModelEndpointNameForQueryInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingModelEndpoint`<sup>Required</sup> <a name="EmbeddingModelEndpoint" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.embeddingModelEndpoint"></a>

```csharp
public string EmbeddingModelEndpoint { get; }
```

- *Type:* string

---

##### `ModelEndpointNameForQuery`<sup>Required</sup> <a name="ModelEndpointNameForQuery" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.modelEndpointNameForQuery"></a>

```csharp
public string ModelEndpointNameForQuery { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get"></a>

```csharp
private DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension">ResetEmbeddingDimension</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmbeddingDimension` <a name="ResetEmbeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetEmbeddingDimension"></a>

```csharp
private void ResetEmbeddingDimension()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput">EmbeddingDimensionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension">EmbeddingDimension</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingDimensionInput`<sup>Optional</sup> <a name="EmbeddingDimensionInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimensionInput"></a>

```csharp
public double EmbeddingDimensionInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmbeddingDimension`<sup>Required</sup> <a name="EmbeddingDimension" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.embeddingDimension"></a>

```csharp
public double EmbeddingDimension { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>

---


### DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference <a name="DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns">PutEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns">PutEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns">ResetEmbeddingSourceColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns">ResetEmbeddingVectorColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson">ResetSchemaJson</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmbeddingSourceColumns` <a name="PutEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns"></a>

```csharp
private void PutEmbeddingSourceColumns(IResolvable|DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingSourceColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `PutEmbeddingVectorColumns` <a name="PutEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns"></a>

```csharp
private void PutEmbeddingVectorColumns(IResolvable|DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.putEmbeddingVectorColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `ResetEmbeddingSourceColumns` <a name="ResetEmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingSourceColumns"></a>

```csharp
private void ResetEmbeddingSourceColumns()
```

##### `ResetEmbeddingVectorColumns` <a name="ResetEmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetEmbeddingVectorColumns"></a>

```csharp
private void ResetEmbeddingVectorColumns()
```

##### `ResetSchemaJson` <a name="ResetSchemaJson" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.resetSchemaJson"></a>

```csharp
private void ResetSchemaJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns">EmbeddingSourceColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns">EmbeddingVectorColumns</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput">EmbeddingSourceColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput">EmbeddingVectorColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput">SchemaJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson">SchemaJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec">DataDatabricksAiSearchIndexDirectAccessIndexSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmbeddingSourceColumns`<sup>Required</sup> <a name="EmbeddingSourceColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumns"></a>

```csharp
public DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList EmbeddingSourceColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList</a>

---

##### `EmbeddingVectorColumns`<sup>Required</sup> <a name="EmbeddingVectorColumns" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumns"></a>

```csharp
public DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList EmbeddingVectorColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList</a>

---

##### `EmbeddingSourceColumnsInput`<sup>Optional</sup> <a name="EmbeddingSourceColumnsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingSourceColumnsInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] EmbeddingSourceColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns</a>[]

---

##### `EmbeddingVectorColumnsInput`<sup>Optional</sup> <a name="EmbeddingVectorColumnsInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.embeddingVectorColumnsInput"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] EmbeddingVectorColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns">DataDatabricksAiSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns</a>[]

---

##### `SchemaJsonInput`<sup>Optional</sup> <a name="SchemaJsonInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJsonInput"></a>

```csharp
public string SchemaJsonInput { get; }
```

- *Type:* string

---

##### `SchemaJson`<sup>Required</sup> <a name="SchemaJson" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.schemaJson"></a>

```csharp
public string SchemaJson { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiSearchIndexDirectAccessIndexSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexDirectAccessIndexSpec">DataDatabricksAiSearchIndexDirectAccessIndexSpec</a>

---


### DataDatabricksAiSearchIndexProviderConfigOutputReference <a name="DataDatabricksAiSearchIndexProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksAiSearchIndexProviderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexProviderConfig">DataDatabricksAiSearchIndexProviderConfig</a>

---


### DataDatabricksAiSearchIndexStatusOutputReference <a name="DataDatabricksAiSearchIndexStatusOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAiSearchIndexStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.indexedRowCount">IndexedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.indexUrl">IndexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.ready">Ready</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus">DataDatabricksAiSearchIndexStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IndexedRowCount`<sup>Required</sup> <a name="IndexedRowCount" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.indexedRowCount"></a>

```csharp
public double IndexedRowCount { get; }
```

- *Type:* double

---

##### `IndexUrl`<sup>Required</sup> <a name="IndexUrl" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.indexUrl"></a>

```csharp
public string IndexUrl { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.ready"></a>

```csharp
public IResolvable Ready { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAiSearchIndexStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiSearchIndex.DataDatabricksAiSearchIndexStatus">DataDatabricksAiSearchIndexStatus</a>

---



