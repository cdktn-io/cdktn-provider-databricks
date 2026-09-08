# `dataDatabricksAccountIamExternalUserV2` Submodule <a name="`dataDatabricksAccountIamExternalUserV2` Submodule" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountIamExternalUserV2 <a name="DataDatabricksAccountIamExternalUserV2" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/account_iam_external_user_v2 databricks_account_iam_external_user_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamExternalUserV2(Construct Scope, string Id, DataDatabricksAccountIamExternalUserV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config">DataDatabricksAccountIamExternalUserV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config">DataDatabricksAccountIamExternalUserV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAccountIamExternalUserV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamExternalUserV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamExternalUserV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamExternalUserV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

DataDatabricksAccountIamExternalUserV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataDatabricksAccountIamExternalUserV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAccountIamExternalUserV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAccountIamExternalUserV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/account_iam_external_user_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountIamExternalUserV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.accountUserStatus">AccountUserStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.externalUserId">ExternalUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.fullName">FullName</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference">DataDatabricksAccountIamExternalUserV2FullNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.internalId">InternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AccountUserStatus`<sup>Required</sup> <a name="AccountUserStatus" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.accountUserStatus"></a>

```csharp
public string AccountUserStatus { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalUserId`<sup>Required</sup> <a name="ExternalUserId" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.externalUserId"></a>

```csharp
public string ExternalUserId { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.fullName"></a>

```csharp
public DataDatabricksAccountIamExternalUserV2FullNameOutputReference FullName { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference">DataDatabricksAccountIamExternalUserV2FullNameOutputReference</a>

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.internalId"></a>

```csharp
public string InternalId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountIamExternalUserV2Config <a name="DataDatabricksAccountIamExternalUserV2Config" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamExternalUserV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/account_iam_external_user_v2#name DataDatabricksAccountIamExternalUserV2#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/data-sources/account_iam_external_user_v2#name DataDatabricksAccountIamExternalUserV2#name}.

---

### DataDatabricksAccountIamExternalUserV2FullName <a name="DataDatabricksAccountIamExternalUserV2FullName" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullName"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullName.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamExternalUserV2FullName {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountIamExternalUserV2FullNameOutputReference <a name="DataDatabricksAccountIamExternalUserV2FullNameOutputReference" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Databricks;

new DataDatabricksAccountIamExternalUserV2FullNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.property.familyName">FamilyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.property.givenName">GivenName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullName">DataDatabricksAccountIamExternalUserV2FullName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilyName`<sup>Required</sup> <a name="FamilyName" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.property.familyName"></a>

```csharp
public string FamilyName { get; }
```

- *Type:* string

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.property.givenName"></a>

```csharp
public string GivenName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullNameOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAccountIamExternalUserV2FullName InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAccountIamExternalUserV2.DataDatabricksAccountIamExternalUserV2FullName">DataDatabricksAccountIamExternalUserV2FullName</a>

---



